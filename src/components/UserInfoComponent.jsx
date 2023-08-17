function UserInfoComponent({ username, iconUrl }) {
    return (
        <div className="line1">
            <img src={iconUrl} alt="アイコン画像" width='40px' height='40px' />
            <p>@{username}</p>
            <img className='img3' src="/iine.jpeg" alt="アイコン画像" width='50px' height='50px' />
        </div>
    );
}

export default UserInfoComponent;
