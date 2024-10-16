import { NewsArticles, NewsSources } from './../models';
import { AppController } from '../controller/controller';
import { AppView } from '../view/appView';

export class App {
    private controller: AppController;
    private view: AppView;
    private sources: Element | null = document.querySelector('.sources');

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        if (this.sources) {
            this.sources.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data: NewsArticles | undefined) => {
                    if (data !== undefined) this.view.drawNews(data);
                })
            );
        }
        this.controller.getSources((data: NewsSources | undefined) => {
            if (data !== undefined) this.view.drawSources(data);
        });
    }
}

export default App;
