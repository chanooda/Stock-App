const dev = false;

const url = dev ? "http://localhost:3001" : "";

// 주식 종목 정보
export async function getStockInfo(id: string) {
  try {
    const response = await fetch(url + `/api/stockCurrentInfo?id=${id}`);
    const data = await response.json();
    return data.output;
  } catch (error) {
    return error;
  }
}
// 3개월 동안의 주식 가격 변화 정보
export async function getChartData(id: string) {
  try {
    const response = await fetch(url + `/api/dateStockInfo?id=${id}`);
    const data = await response.json();
    return data.reverse().splice(1);
  } catch (error) {
    return error;
  }
}
// 오늘 주식 차트 정보
export async function getTodayChartData(id: string) {
  try {
    const response = await fetch(url + `/api/todayStockInfo?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
// 네이버 뉴스 검색 API
export async function getNews(keyword: string) {
  const response = await fetch(url + `/api/news?keyword=${keyword}`);
  const data = await response.json();
  return data;
}

// 코스피 종목 리스트
export async function getKospi(page: number) {
  const response = await fetch(url + `/api/kospi?page=${page}`);
  const data = await response.json();
  // react-query에서 제공하는 인피니티 스크롤 기능을 위한 page 속성
  return { data: data.stocks, nextPage: page + 1 };
}
