function WhoWeAre ({image,title,para}){
    return <div>
        <div className="ml-[200px] w-[450px] drop-shadow-lg  h-[220px] bg-white  mt-10">
            <div className="flex">
                <img className="h-[90px] w-[90px] ml-10 mb-5 " src={image} alt="" />
                <h1>{title}</h1>
            </div>
            <p className="ml-10">{para}</p>
        </div>
    </div>
}