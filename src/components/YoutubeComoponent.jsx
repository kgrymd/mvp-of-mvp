import Youtube from "react-youtube";

function YoutubeComponent({ videoId, title, description, opts }) {
    return (
        // <div className='container'>
        <>
            <h3>{title}</h3>
            <Youtube
                videoId={videoId}
                opts={opts}
                className="iframe"
                containerClassName="youtube"
            />
            <p className='discription'>{description}</p>
        </>
        // </div>
    );
}

export default YoutubeComponent;
