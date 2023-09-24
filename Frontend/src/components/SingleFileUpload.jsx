import React, { useState ,useContext, createContext} from "react";
import { StatusContext } from "../pages/Chatroom";

const SingleFileUpload = () => {
    
    const [file, setFile] = useState()
    const [up_status, setStatus] = useState()

    const {upload_status, setUpload_status} = useContext(StatusContext)
    console.log("UPLOAD", upload_status)
    
    const handleFileChange = (event) => {
        if (event.target.files) {
            setStatus("initial")
            setFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (file) {
            setStatus("uploading")
            console.log("Uploading file");
            const formData = new FormData();
            formData.append("file", file);

            try {
                const response = await fetch("http://localhost:8000/fileupload", {
                    method: "POST",
                    body: formData,
                });

                // const response = await axios.post(url, formData, config)
                setStatus("success")
                setUpload_status(true)
                console.log(response)
            }
            catch (error) {
                setStatus("failed")
                console.error(error);
            }

        }

    };

    const Result = ({status}:{status:string}) => {
        if (status === "success") {
            return <p>✅ File uploaded successfully!</p>;
        }
        else if(status==="failed") {
            return <p>❌ File upload failed!</p>;
        }
        else if(status==="uploading"){
            return <p>⏳ Uploading selected file...</p>;
        }
        else return null;
    };

    return (
        <>
            <div>
                <input id="file" type="file" onChange={handleFileChange} />
            </div>
            {file && (
                <section>
                    File details:
                    <ul>
                        <li> Name:{file.name}</li>
                        <li>Type : {file.type}</li>
                    </ul>
                </section>
            )}
            {file && file.type==="application/pdf"&& <button onClick={handleUpload}> Upload a file</button>}
            <Result status={up_status} />
        </>
    )
};

export default SingleFileUpload;