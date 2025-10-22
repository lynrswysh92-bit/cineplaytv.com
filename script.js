// נתונים לדוגמה של סרטים (במקום לקבל אותם משרת)
const movies = [
    { title: "הסנדק", year: 1972, genre: "פשע, דרמה" },
    { title: "האביר האפל", year: 2008, genre: "פעולה, דרמה, פשע" },
    { title: "הארי פוטר ואבן החכמים", year: 2001, genre: "הרפתקאות, פנטזיה, משפחה" },
    { title: "התחלה", year: 2010, genre: "פעולה, הרפתקאות, מדע בדיוני" },
    { title: "האזרח קיין", year: 1941, genre: "דרמה, מסתורין" },
    // --- סרטים חדשים שהוספנו ---
    { title: "פארק היורה", year: 1993, genre: "הרפתקאות, מדע בדיוני, מותחן" },
    { title: "מטריקס", year: 1999, genre: "פעולה, מדע בדיוני" },
    { title: "שר הטבעות: אחוות הטבעת", year: 2001, genre: "הרפתקאות, דרמה, פנטזיה" }
    // --- סוף סרטים חדשים ---
];

// פונקציה שתרוץ כשהדף נטען
document.addEventListener('DOMContentLoaded', () => {
    const movieListElement = document.getElementById('movie-list'); // מוצא את האלמנט של הרשימה ב-HTML

    // מוודא שהאלמנט נמצא לפני שמנסים להוסיף אליו דברים
    if (movieListElement) {
        // מנקה את ההודעה "טוען סרטים..." שהייתה שם בהתחלה
        movieListElement.innerHTML = '';

        // עובר על כל סרט ברשימת הנתונים שלנו
        movies.forEach(movie => {
            // יוצר אלמנט חדש מסוג li (פריט רשימה)
            const listItem = document.createElement('li');

            // מגדיר את התוכן של פריט הרשימה החדש
            // מציג את שם הסרט, שנת ההפקה והז'אנר
            listItem.textContent = `${movie.title} (${movie.year}) - ז'אנר: ${movie.genre}`;

            // מוסיף את פריט הרשימה שיצרנו אל תוך רשימת ה-ul שעל הדף
            movieListElement.appendChild(listItem);
        });
    } else {
        console.error("לא נמצא אלמנט עם ID 'movie-list' בדף ה-HTML.");
    }
});