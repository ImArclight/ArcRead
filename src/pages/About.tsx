import Navbar from '../component/Navbar'

export default function About() { 
  return (
    <div>
        <Navbar />
        <div className='mt-10 '>
            <h1 className='text-teal-500 italic text-2xl text-center'>ArcRead</h1>
            <h1 className='text-red-600 text-2xl mt-6 text-center'>Read This before inputting your file and start reading!</h1>
            <p className='mt-4 ml-5 mr-5'>Maybe some of your imported Epub like <span className='text-red-400'><a href="/Trial1">This Trial Ebook</a></span>, the quick chapter page didn't work, perhaps it has to do with the link inside your Epub File. What will happen is when you click on the chapter page, it will return blank page instead and when you try to refresh the browser then change the Epub file, it will remain the same. All you have to do is try to input proper Epub file that has a link in each chapter. Click the page navigator on top left and click one of the chapter, it will automaticly take you to the chapter destination. Now, you can import your Epub file. Normally if the Epub file didn't have a link on each chapter, after clicking on the chapter navigation and returned the blank page, it'll return to normal after refreshing the browser. But I want to make this ArcRead can start reading again where you left of before. </p>
        </div>
        <p className='mt-20 align-bottom text-center'>
                            Credit: 
                        </p>
                        <p className='mt-1 text-center text-red-400'>
                        <span><a href="https://github.com/futurepress/epub.js">Epub.js </a></span>
                        </p>
                        <p className='mt-1 text-center text-red-400'>
                            <span>
                            <a href="https://github.com/gerhardsletten/react-reader?tab=readme-ov-file">
                                React Reader
                            </a>
                            </span>
                        </p>
    </div>
  )
}
