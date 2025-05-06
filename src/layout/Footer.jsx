export function Footer() {
    return (
      <footer className="page-footer grey darken-4">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} by p3mg
            <a className="grey-text text-lighten-4 right" href="https://github.com/p3mg">
              Repository
            </a>
          </div>
        </div>
      </footer>
    );
  }