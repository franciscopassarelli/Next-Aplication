import {Image} from 'next/image'

const Loading = () => {

return(
    <div className='w-full h-full min-h-screen flex justify-center items-center'>
        <Image
        src={`vercel.svg`}
        alt='vercel logo'
        width={150}
        height={150}
        className="anmimate-pulse"
        />


    </div>
)

}

export default Loading