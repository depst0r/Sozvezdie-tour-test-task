class TourService {
  getResours = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCards = () => {
    return this.getAllCards(
      "https://cdn.sozvezdie-tour.ru/content/demo_offers-231105.json"
    );
  };
}

export default TourService;
