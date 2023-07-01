import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { nanoid } from "nanoid";

type FILE_WITH_PREVIEW = File & { preview: string; id: string }

const Dropzone = () => {

    const [ files, setFiles ] = useState<FILE_WITH_PREVIEW[]>([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg']
        },
        onDrop: acceptedFiles => {

            const allSelectedFiles = [
                ...acceptedFiles.map(file =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                        id: nanoid(),
                })
            ),
            ...files
            ]

            allSelectedFiles.splice(10)
            setFiles(allSelectedFiles)
        }
    })

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks , will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview))
    }, [])

    return (
        <section className="w-full h-full flex flex-col space-y-4 mx-auto p-10">
            <div {...getRootProps()} 
                className="rounded-xl border-dashed flex items-center justify-center border border-black p-10 bg-slate-100 hover:bg-black/10"
            >
                <input {...getInputProps()} className="w-full h-full"/>
                <p className="text-gray-400">Drag 3 to 10 drop some images here, or click to select files</p>
            </div>
            <div className="flex flex-wrap items-center justify-center">

            {
                files && files.length > 0 && (
                    files.map(file => (
                        <div key={file.id} className="w-[256px] h-[256px] m-4">
                            <img
                                src={file.preview}
                                alt={file.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))
                )
            }

            </div>
        </section>
    )
}


export default Dropzone;