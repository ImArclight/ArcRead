import React, { useState } from 'react';
import { ReactReader } from 'react-reader';
import Navbar from '../component/Navbar';

export default function ArcRead() {
    const [location, setLocation] = useState<string | number>(0);
    const [file, setFile] = useState<File | null>(null);
    const [imported, setImported] = useState<boolean>(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setLocation(0);
            setImported(true);
        }
    };

    return (
        <div>
            <Navbar />
            <br />
            <div className='h-[100vh]'>
                {!imported && ( // Render input only if a file has not been imported
                    <input type='file' accept='.epub' onChange={handleFileChange} />
                )}
                {file && (
                    <ReactReader
                    url={URL.createObjectURL(file)}
                    location={location}
                    locationChanged={(epubcfi: string) => setLocation(epubcfi)}
                    epubInitOptions={{
                        openAs: 'epub',
                    }}
                    />
                )}
            </div>
        </div>
        
    );
}
