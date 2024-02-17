import Image from 'next/image'

const Loading = () => {

return(
    <div className='w-full h-full min-h-screen flex justify-center items-center'>
        <Image
        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMk7FTSymH9RlilziJurJVXkjxCGaozolJcQ&usqp=CAU"}
        alt='vercel logo'
        width={150}
        height={150}
        className="anmimate-pulse"
        />


    </div>
)

}

export default Loading