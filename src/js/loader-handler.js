export default class LoaderHandler {
  static HIDDEN_CLASS = 'visually-hidden';

  constructor(galleryEl, loaderEl, loadMoreEl, endMessageEl) {
    this.gallery = galleryEl;
    this.loader = loaderEl;
    this.loadMore = loadMoreEl;
    this.endMessage = endMessageEl;
  }

  setHided() {
    this.gallery.classList.add(LoaderHandler.HIDDEN_CLASS);
    this.loader.hidden = true;
    this.loadMore.hidden = true;
    this.endMessage.hidden = true;
  }

  setLoading() {
    this.loader.hidden = false;
  }

  setLoaded() {
    this.loader.hidden = true;
    this.loadMore.hidden = true;
  }

  setGalleryShow() {
    this.gallery.classList.remove(LoaderHandler.HIDDEN_CLASS);
  }

  setLoadMore() {
    this.loader.hidden = true;
    this.loadMore.hidden = false;
  }

  setFinalShow() {
    this.loader.hidden = true;
    this.gallery.classList.remove(LoaderHandler.HIDDEN_CLASS);
    this.loadMore.hidden = true;
    this.endMessage.hidden = false;
  }
}
