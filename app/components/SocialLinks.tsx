import Image from 'next/image'

const SocialLinks = () => {
    const imgWidth = 36;

    return (
        
        <div className="flex justify-center items-center bg-white text-gray-500 shadow-md">
            <a href="https://www.linkedin.com/in/samuel-abera-6593a2209/">
                <Image 
                    className="m-3"
                    src="/linkedin.png" width={imgWidth}height={imgWidth}alt="test" />
            </a>
            <a href="https://twitter.com/Samuel7Abera7">
                <Image 
                    className="m-3"
                    src="/twitter.png" width={imgWidth}height={imgWidth}alt="test" />
            </a>
            <a href="https://github.com">
                <Image 
                    className="m-3"
                    src="/github.png" width={imgWidth}height={imgWidth}alt="test" />
            </a>
            <a href="https://www.youtube.com/@silentcoder7">
                <Image 
                    className="m-3"
                    src="/site.png" width={imgWidth}height={imgWidth}alt="test" />
            </a>
        </div>
    )
}

export default SocialLinks;