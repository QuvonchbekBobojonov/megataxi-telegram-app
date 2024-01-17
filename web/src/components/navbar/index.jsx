function Navbar() {
    function getOSType(userAgent) {
        const osRegex = /(Windows|Macintosh|Linux|Android|iOS)/i;
        const match = userAgent.match(osRegex);

        if (match && match[1]) {
            return match[1];
        } else {
            return 'Unknown OS';
        }

    }

    const userAgent = navigator.userAgent;
    const osType = getOSType(userAgent);
    console.log('Operating System:', osType);
    return (
        <div id={'navbar'}
             className={'flex absolute top-[10px] left-[215px] h-[60px] p-2 items-center text-white bg-[#333333] rounded-md'}>
            <ul className={'text-end'}>
                <li>100000 UZS</li>
                <li>Balans</li>
            </ul>
            <span
                className={'w-[50px] bg-none text-white flex text-center ml-3 items-center justify-center rounded-md'}>
                <img src={'https://github.com/QuvonchbekBobojonov.png'} className={'rounded-md'} alt={'avatar'}/>
            </span>
        </div>
    )
}

export default Navbar