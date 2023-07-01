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
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file),
                id: nanoid()
            })))
        }
    })

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks , will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview))
    }, [])

    return (
        <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <div className="flex justify-center items-center flex-wrap max-w-screen-md">

            {
                files && files.length > 0 && (
                    files.map(file => (
                        <div key={file.id} className="w-full h-full">
                            <img
                                src={file.preview}
                                alt={file.name}
                                className="object-cover w-[512px] h-[512px]"
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