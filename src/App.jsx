import './App.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Youtube.scss";
import YoutubeComponent from './components/YoutubeComoponent';
import DetailsComponent from './components/DetailsComponent';


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
      width: '100%', // ここを変更
      height: 'auto', // ここを追加
    },
  }


  return (

    <Slider {...settings}>
      <div className='container'>
        <YoutubeComponent
          videoId="ufNWSa7ou74"
          title="トランポリンやろ"
          description="動画見てやりたくなりました〜"
          opts={opts}
        />
        <DetailsComponent
          period="まず１ヶ月"
          participants="〜4人"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hw9B4wFuJ_XmDFfcfP9cd16SfetYhNixXQ&usqp=CAU"
        />
      </div>

      <div className='container'>
        <YoutubeComponent
          videoId="eb1sFXlTWb4"
          title="VALORANTやろ"
          description="至急上手くなりたいです〜"
          opts={opts}
        />
        <DetailsComponent
          period="まず１ヶ月"
          participants="〜4人"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hw9B4wFuJ_XmDFfcfP9cd16SfetYhNixXQ&usqp=CAU"
        />
      </div>

      <div className='container'>
        <YoutubeComponent
          videoId="WL5-n7bp0JY"
          title="アルゼンチンタンゴやろ"
          description="至急上手くなりたいです〜"
          opts={opts}
        />
        <DetailsComponent
          period="まず１ヶ月"
          participants="〜4人"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hw9B4wFuJ_XmDFfcfP9cd16SfetYhNixXQ&usqp=CAU"
        />
      </div>
    </Slider>
  );
}

export default App
