export default function notFound() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div className="text-center">
        <h1 className="display-4">404</h1>
        <p className="lead">Oops! Page not found.</p>
        <a href="/home" className="btn btn-primary mt-3">Go Home</a>
      </div>
    </div>
  );
}
