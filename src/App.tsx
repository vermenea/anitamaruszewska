import './index.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function App() {
  return (
    <div className='bg-beige min-h-screen flex flex-col justify-center items-center p-8 ephesis-regular'>
      <div className='w-1/5'>
        <img src='/src/assets/3.png' />
      </div>
      <div className=''>
        <header className='text-center mb-8'>
          <h1 className='text-4xl font-bold'>Piękna twarz po Ajurwedyjsku</h1>
        </header>
        <main className='flex flex-col justify-center items-center text-2xl'>
          <h3>
            Materiały do pobrania po uczestnictwie w
            warsztatach
          </h3>
          <div className='flex items-center justify-between p-2'>
            <div className='file-space p-4 w-1/3 text-center'>
              <p>Poradnik</p>
              <a
                href='/path/to/file1'
                download
                className='text-blue-500 underline'
              >
                <img
                  src='/src/assets/pdf.png'
                  alt='PDF File'
                  className='inline-block w-24 h-auto'
                />
              </a>
            </div>
            <div className='file-space p-4 w-1/3 text-center'>
              <p>Przepisy</p>
              <a
                href='/path/to/file2'
                download
                className='text-blue-500 underline'
              >
                <img
                  src='/src/assets/pdf.png'
                  alt='PDF File'
                  className='inline-block w-24 h-auto'
                />
              </a>
            </div>
          </div>
        </main>
      </div>
      <footer className='text-center p-2 border-t border-gray-300 w-full text-2xl'>
        <p>Anita Maruszewska</p>
        <a href='mailto:anitamaruszewska@wp.pl' className='no-underline'>
          <p>
            <EmailOutlinedIcon className='inline-block mr-2' />
            anitamaruszewska@wp.pl
          </p>
        </a>
      </footer>
    </div>
  );
}

export default App;
