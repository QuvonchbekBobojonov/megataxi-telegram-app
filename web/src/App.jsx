import Navbar from "./components/navbar";

function App() {
    const userAgent = navigator.userAgent;

    function getOperatingSystem(userAgent) {
        const osRegex = {
            Windows: /Windows/i,
            Macintosh: /Macintosh|Mac OS/i,
            Android: /Android/i,
            Linux: /Linux/i,
            iOS: /iPhone|iPad|iPod/i,
        };

        for (const os in osRegex) {
            if (osRegex[os].test(userAgent)) {
                return os;
            }
        }

        return 'Unknown OS';
    }

    const operatingSystem = getOperatingSystem(userAgent);
    console.log('Operating System:', operatingSystem);
    if (operatingSystem === 'Android' || operatingSystem === 'iOS') {
        return (
            <>
                <Navbar/>
            </>
        )
    } else {
        return (
            <div id={'not'} className={'flex items-center justify-center'}>
                <h1>access is not possible</h1>
            </div>
        )
    }
}

export default App
