import React, { useState, useEffect } from 'react';
import { ReactReader } from 'react-reader';
import Navbar from '../component/Navbar';

export default function ArcRead() {
    const [location, setLocation] = useState<string | number>(0);
    const [file, setFile] = useState<File | null>(null);
    const [imported, setImported] = useState<boolean>(false);

    useEffect(() => {
        // Retrieve bookmarked location from localStorage when component mounts
        const bookmarkedLocation = localStorage.getItem('bookmarkLocation');
        if (bookmarkedLocation) {
            setLocation(bookmarkedLocation);
        }
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setImported(true);
        }
    };

    const handleLocationChange = (epubcfi: string) => {
        setLocation(epubcfi);
        // Store bookmarked location in localStorage
        localStorage.setItem('bookmarkLocation', epubcfi);
    };

    return (
        <div>
            <Navbar />
            <br />
            <div className='h-[100vh] text-center'>
                {!imported && ( // Render input only if a file has not been imported
                    <div>
                        <p className='mt-6 text-teal-500 mb-5 text-2xl italic text-center'>Start Reading</p>
                        <input className='justify-center items-center text-center' type='file' accept='.epub' onChange={handleFileChange} />
                    </div> 
                    
                )}
                {file && (
                    <>
                    <ReactReader
                        url={URL.createObjectURL(file)}
                        location={location}
                        locationChanged={handleLocationChange}
                        epubInitOptions={{
                        openAs: 'epub',
                        }}
                    />
                    </>
                    
                )}
            </div>
        </div>
    );
}
