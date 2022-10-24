import React from "react";
import "./index.css";
const data1 = [
  {
    src: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/3/5/a/535a6b4f34045d2b83a73eabc6358b88.jpg",
    title: "Giấc mơ đẹp",
    artist: "Nguyễn Trọng Tài",
    timeUp: "1 ngày trước",
  },

  {
    src: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/a/6/d/f/a6dfae74cebe671e7469dd027a900d0e.jpg",
    title: "With You",
    artist: "Gabry Ponte, JP Cooper",
    timeUp: "3 ngày trước",
  },
  {
    src: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/2/9/2/5292d3f5146bd192c58139935cc6dce7.jpg",
    title: "Lời có cánh",
    artist: "OSAD",
    timeUp: "4 ngày trước",
  },
  {
    src: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/c/9/e/dc9e0327d6e99d57cdcd54981cb5989d.jpg",
    title: "Người Như Anh",
    artist: "Mai Tiến Dũng",
    timeUp: "2 ngày trước",
  },
  {
    src: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwMTgyMTgzOTk3MDg4ODkw/gettyimages-483195065.jpg",
    title: "Monotonia",
    artist: "Shakỉa, Ozuna",
    timeUp: "1 ngày trước",
  },
  {
    src: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2018/03/06/1/0/a/4/1520308951432_600.jpg",
    title: "Người còn thương",
    artist: "Minh Vương M4U, Thương Võ, ACV",
    timeUp: "5 ngày trước",
  },
  {
    src: "https://znews-photo.zingcdn.me/w660/Uploaded/wpdhnwhnw/2022_10_14/307653264_637995611013005_2590676343667179460_n_1.jpg",
    title: "Cô đơn trên sofa",
    artist: "Hồ Ngọc Hà",
    timeUp: "1 ngày trước",
  },
  {
    src: "https://static2.yan.vn/YanNews/2167221/202107/wren-evans-la-ai-thong-tin-tieu-su-anh-chang-nhu-the-nao-bc1c132f.jpg",
    title: "Vàng",
    artist: "Daisy Le Garcon, Wren Evans",
    timeUp: "1 ngày trước",
  },
  {
    src: "https://nguoinoitieng.tv/images/nnt/102/1/bgbd.jpg",
    title: "Hoa tình chẳng nở",
    artist: "Dee Trần",
    timeUp: "5 ngày trước",
  },
  {
    src: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/12/17/863059/Osad-2.png",
    title: "90609",
    artist: "Tóc tiên, Mew Amazing",
    timeUp: "1 ngày trước",
  },
];
const data2 = [
  {
    src: "https://media.istockphoto.com/vectors/wednesday-handdrawn-lettering-spring-vector-poster-floral-frame-vector-id1142211001?k=20&m=1142211001&s=612x612&w=0&h=nCm1zDvqmbxU7L7o_uFyfONTcvZKFHM8_-Fm92jS6Is=",
    title: "Nhạc Cho Thứ Tư",
    note: "Thứ Tư từ từ tận hưởng Indie Việt",
  },
  {
    src: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/8/1/1/c81185776ffb408b0edb6acf53756abb.jpg",
    title: "Đóa Hồng Nhạc Việt",
    note: "Nữ ca sĩ tỏa sắc hương trong khu vườn V-Pop",
  },
  {
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/04/22/9/3/4/c/1587551129349.jpg",
    title: "Chillout",
    note: "Bạn đã sẵn sàng bỏ hết mọi ưu phiền mệt mỏi hay chưa",
  },
  {
    src: "https://i1.sndcdn.com/artworks-001011856801-99r2ni-t500x500.jpg",
    title: "Pop Rising",
    note: "Tiềm năng Pop Âu Mỹ đáng nghe nhất hiện tại",
  },
  {
    src: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/2/8/2/a282a0d1ca6dff2bdba8f0944af98a64.jpg",
    title: "Hà Nhi's Ex Story",
    note: "Lâu lâu nhắc lại 'vũ trụ người yêu cũ' cùng Hà Nhi",
  },
];
const SubApp1 = ({ src, alt, title, artist, timeUp }) => {
  return (
    <div className="component1">
      <img src={src} alt={alt} className="comp1-img"></img>
      <ul className="comp1-text">
        <li className="comp1-header">{title}</li>
        <li className="comp1-p">{artist}</li>
        <li className="comp1-p">{timeUp}</li>
      </ul>
    </div>
  );
};
const SubApp2 = ({ src, alt, title, note }) => {
  return (
    <div className="component2">
      <img src={src} alt={alt} className="comp2-img"></img>
      <ul className="comp2-text">
        <li className="comp1-header">{title}</li>
        <li className="comp1-p">{note}</li>
      </ul>
    </div>
  );
};
const App = () => {
  return (
    <div className="background">
      <h1 className="menu-header">Mới phát hành</h1>
      <ul className="menu-flex">
        <div className="menu-item">
          <li className="menu-item1">
            <div>BÀI HÁT</div>
          </li>
          <li className="menu-item2">ALBUM</li>
        </div>
        <li className="menu-item">TẤT CẢ</li>
      </ul>
      <div className="main">
        {data1.map((props) => (
          <SubApp1
            src={props.src}
            title={props.title}
            artist={props.artist}
            timeUp={props.timeUp}
          />
        ))}
      </div>
      <h2 className="menu-header">Cứ Chill Thôi</h2>
      <div className="main">
        {data2.map((props) => (
          <SubApp2 src={props.src} title={props.title} note={props.note} />
        ))}
      </div>
    </div>
  );
};
export default App;
