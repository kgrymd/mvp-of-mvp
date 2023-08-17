import './App.css'

import Slider from "react-slick";
import Youtube from "react-youtube"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Youtube.scss";

function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
  };

  const opts = {
    playerVars: {
      playsinline: 1,
      autoplay: 1,
      mute: 1,
      loop: 1,
      // width: '310',
      width: '100%', // ここを変更
      height: 'auto', // ここを追加
    },
  }


  return (

    <Slider {...settings}>
      <div className='container'>
        <h3>トランポリンやろ</h3>
        <Youtube
          videoId="ufNWSa7ou74"//挿入したいyoutube動画のURL末尾を入力
          opts={opts}
          className="iframe"
          containerClassName="youtube"
        />
        <p className='discription'>instaで動画見てやりたくなりました〜<br /><a href="https://www.instagram.com/reel/CvcOw9Dtklp/?igshid=NTc4MTIwNjQ2YQ==">動画を見る</a></p>
        <div className="container2">
          <div className="line1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hw9B4wFuJ_XmDFfcfP9cd16SfetYhNixXQ&usqp=CAU" alt="アイコン画像" width='40px' height='40px' />
            <p>@kjii けいじぃ</p>
            <img className='img3' src="/iine.jpeg" alt="アイコン画像" width='50px' height='50px' />
          </div>
          <div className="line2">
            <img src="/whiteimg.png" alt="" width='40px' height='40px' />
            <p>期間: まず１ヶ月</p>
            <img className='img3' src="/bukuma.png" alt="ブクマ画像" width='35px' height='35px' />
          </div>
          <div className="line3">
            <img src="/whiteimg.png" alt="" width='40px' height='40px' />
            <p>募集人数: 〜4人
            </p>
            <img className='img3' src="/koment.png" alt="コメント画像" width='35px' height='35px' />
          </div>
          <div className="line3">
            <p>参加者</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr78vU3xMHGZ1F4Mb191cX46P6CST90Ro4og&usqp=CAU" alt="アイコン画像" width='35px' height='35px' />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLz4L3QDb7a3-pkb1NbrgZ5cMj_SRWiWZ1Pw&usqp=CAU" alt="アイコン画像" width='45px' height='45px' />

            <img className='img3' src="/join.jpeg" alt="アイコン画像" width='85px' height='85px' />
          </div>


        </div>
      </div>


      <div className='container'>
        <h3>VALORANTやろ</h3>
        <Youtube
          videoId="eb1sFXlTWb4"//挿入したいyoutube動画のURL末尾を入力
          opts={opts}
          className="iframe"
          containerClassName="youtube"
        />
        <p className='discription'>至急上手くなりたいです〜<br /><a href="https://www.youtube.com/watch?v=eb1sFXlTWb4">動画を見る</a></p>
        <div className="container2">
          <div className="line1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hw9B4wFuJ_XmDFfcfP9cd16SfetYhNixXQ&usqp=CAU" alt="アイコン画像" width='40px' height='40px' />
            <p>@kjii けいじぃ</p>
            <img className='img3' src="/iine.jpeg" alt="アイコン画像" width='50px' height='50px' />
          </div>
          <div className="line2">
            <img src="/whiteimg.png" alt="" width='40px' height='40px' />
            <p>期間: まず１ヶ月</p>
            <img className='img3' src="/bukuma.png" alt="ブクマ画像" width='35px' height='35px' />
          </div>
          <div className="line3">
            <img src="/whiteimg.png" alt="" width='40px' height='40px' />
            <p>募集人数: 〜4人
            </p>
            <img className='img3' src="/koment.png" alt="コメント画像" width='35px' height='35px' />
          </div>
          <div className="line3">
            {/* <img src="" alt="" width='40px' height='40px' /> */}
            <p>参加者</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLz4L3QDb7a3-pkb1NbrgZ5cMj_SRWiWZ1Pw&usqp=CAU" alt="アイコン画像" width='45px' height='45px' />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr78vU3xMHGZ1F4Mb191cX46P6CST90Ro4og&usqp=CAU" alt="アイコン画像" width='35px' height='35px' />

            <img className='img3' src="/join.jpeg" alt="アイコン画像" width='85px' height='85px' />
          </div>


        </div>
      </div>
      <div className='container'>
        <h3>アルゼンチンタンゴやろ</h3>
        <Youtube
          videoId="WL5-n7bp0JY"//挿入したいyoutube動画のURL末尾を入力
          opts={opts}
          className="iframe"
          containerClassName="youtube"
        />
        <p className='discription'>至急上手くなりたいです〜<br /><a href="https://youtu.be/WL5-n7bp0JY">動画を見る</a></p>
        <div className="container2">
          <div className="line1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hw9B4wFuJ_XmDFfcfP9cd16SfetYhNixXQ&usqp=CAU" alt="アイコン画像" width='40px' height='40px' />
            <p>@kjii けいじぃ</p>
            <img className='img3' src="/iine.jpeg" alt="アイコン画像" width='50px' height='50px' />
          </div>
          <div className="line2">
            <img src="/whiteimg.png" alt="" width='40px' height='40px' />
            <p>期間: まず１ヶ月</p>
            <img className='img3' src="/bukuma.png" alt="ブクマ画像" width='35px' height='35px' />
          </div>
          <div className="line3">
            <img src="/whiteimg.png" alt="" width='40px' height='40px' />
            <p>募集人数: 〜4人
            </p>
            <img className='img3' src="/koment.png" alt="コメント画像" width='35px' height='35px' />
          </div>
          <div className="line3">
            <p>参加者</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hw9B4wFuJ_XmDFfcfP9cd16SfetYhNixXQ&usqp=CAU" alt="アイコン画像" width='40px' height='40px' />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hw9B4wFuJ_XmDFfcfP9cd16SfetYhNixXQ&usqp=CAU" alt="アイコン画像" width='40px' height='40px' />

            <img className='img3' src="/join.jpeg" alt="アイコン画像" width='85px' height='85px' />
          </div>


        </div>
      </div>
    </Slider>
  );
}

export default App
