import axios from 'axios';

let page = 1;
export function resetPage() {
  page = 1;
}

export async function fetchImage(searchQuery) {
  const searchParams = new URLSearchParams({
    key: '29600371-65e1dfd0392553157581d4ad4',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 3,
    page,
  });
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams}`
    );
    page += 1;
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
