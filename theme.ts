class Theme {
    private _current: string = 'light';

    get current(): string {
        return this._current;
    }

    constructor() {
        let cachingTheme = this.getCachingTheme();

        if (!cachingTheme) {
            if (this.isDarkTheme())
                this._current = 'dark';
            else
                this._current = 'light';
        } else {
            this._current = cachingTheme;
        }

        if (this._current === 'light')
            this.setLightTheme();
        else
            this.setDarkTheme();
    }

    setDarkTheme() {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        this._current = 'dark';
    }

    setLightTheme() {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        this._current = 'light';
    }

    private getCachingTheme = () =>
        localStorage.getItem('theme');

    private isDarkTheme = () => (
        window.matchMedia &&
        window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches
    );
}

export default Theme;
