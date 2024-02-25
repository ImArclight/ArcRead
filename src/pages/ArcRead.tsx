import React, { useState, useEffect } from 'react';
import { ReactReader } from 'react-reader';
import Navbar from '../component/Navbar';

 
  
export default function ArcRead() {
    const [location, setLocation] = useState<string | number>(0);
    const [file, setFile] = useState<File | null>(null);
    const [imported, setImported] = useState<boolean>(false);

    useEffect(() => { 
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
        // store bookmarked location in localStorage
        localStorage.setItem('bookmarkLocation', epubcfi);
    };

    return (
        <div>
            <Navbar />
            <br />
            <div className='h-[100vh] text-center'>
                {!imported && ( 
                    <div>
                        <p className='mt-6 text-teal-500 mb-5 text-2xl italic text-center'>Start Reading</p>
                        <p className='mb-4 text-teal-800'>
                            Add your Epub Book file below!
                        </p>
                        <input className='justify-center items-center text-center bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded' type='file' accept='.epub' onChange={handleFileChange} 
                        />
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
