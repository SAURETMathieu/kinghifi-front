import './index.css';

function ErrorPage() {
  return (
    <div className="photo_containeur">
      <img className="img_404" src="/images/404_7.jpeg" alt="error 404" />
      <nav>
        <a className="home_link" href="/">
          OH! LOOKS LIKE YOU GOT LOST!
          <span>
            RIGHT THIS WAY!
          </span>
        </a>
        <p className="rotated rotated_4_1">4</p>
        <p className="rotated rotated_0">0</p>
        <p className="rotated rotated_4_2">4</p>
      </nav>

    </div>

  );
}

export default ErrorPage;
