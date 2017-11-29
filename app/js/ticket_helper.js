module.exports = {
  carrier_url: (carrier) => {
    return `https://pics.avs.io/99/36/${carrier}.png`
  },
  formatted_date: (string_day) => {
    let day_parts = string_day.split('.').map((x) => parseInt(x));
    let months = ['янв', 'феб', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'дек'];
    let day_of_week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    let base_date = `${parseInt(day_parts[0])} ${months[parseInt(day_parts[1]) - 1]} 20${day_parts[2]}`;
    let date = new Date(2000 + day_parts[2], day_parts[1] - 1, day_parts[0]);
    return `${base_date}, ${day_of_week[date.getDay()]}`;
  },
  stop_desc: (stops_number) => {
    if(stops_number === 0){
      return "Без пересадок";
    } else if (stops_number === 1){
      return "1 пересадка";
    } else {
      return `${stops_number} пересадки`;
    }
  }
}
