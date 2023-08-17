import UserInfoComponent from './UserInfoComponent';

function DetailsComponent({ period, participants, imageUrl1, imageUrl2 }) {
    return (
        <div className="container2">
            <UserInfoComponent username="keijixi けいじぃ" iconUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hw9B4wFuJ_XmDFfcfP9cd16SfetYhNixXQ&usqp=CAU" />
            <div className="line2">
                <img src="/whiteimg.png" alt="" width='40px' height='40px' />
                <p>期間: {period}</p>
                <img className='img3' src="/bukuma.png" alt="ブクマ画像" width='35px' height='35px' />
            </div>
            <div className="line3">
                <img src="/whiteimg.png" alt="" width='40px' height='40px' />
                <p>募集人数: {participants}</p>
                <img className='img3' src="/koment.png" alt="コメント画像" width='35px' height='35px' />
            </div>
            <div className="line3">
                <p>参加者</p>
                <img src={imageUrl1} alt="アイコン画像" width='35px' height='35px' />
                <img src={imageUrl2} alt="アイコン画像" width='45px' height='45px' />
                <img className='img3' src="/join.jpeg" alt="アイコン画像" width='85px' height='85px' />
            </div>
        </div>
    );
}

export default DetailsComponent;
