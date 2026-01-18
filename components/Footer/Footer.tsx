import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Artemii Holovko</p>
          <p>
            Contact me:
            <a href="mailto:artem.holovko.97@gmail.com">
              artem.holovko.97@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
