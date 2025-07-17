
# 📝 Pannonians Blog – React blog aplikacija

Ovo je jednostavna blog aplikacija napravljena u React-u kao deo zadatka za poziciju.

Aplikacija koristi REST API servis [JSONPlaceholder](https://jsonplaceholder.typicode.com/) za prikaz blog postova. Omogućava pregled najnovijih postova, prikaz skraćenog sadržaja na početnoj stranici i detaljan prikaz svakog pojedinačnog posta.

Demo: [Demo](https://www.youtube.com/watch?v=suFUfkZHzSE&ab_channel=%D0%A0%D0%B0%D0%B4%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%9C%D0%B0%D1%81%D1%82%D0%B8%D0%BB%D0%BE%D0%B2%D0%B8%D1%9B) 

---

## 🚀 Funkcionalnosti

- ✅ Korišćenje **React 18** i **Vite**
- ✅ Upravljanje stanjem uz pomoć **Redux Toolkit**
- ✅ Dohvata **20 najnovijih postova** sa JSONPlaceholder API-ja
- ✅ Na početnoj stranici prikazuje se naslov i prvih 30 karaktera sadržaja posta uz link “read more”
- ✅ Klik vodi na posebnu stranicu sa detaljnim prikazom celog posta
- ✅ Stranica pojedinačnog posta podržava osvežavanje i direktan pristup putem URL-a
- ✅ Dugme za povratak na početnu stranicu
- ✅ Minimalistički, vizuelno prijatan dizajn sa SCSS-om
- ✅ (Opciono) **Storybook** za testiranje i prikaz komponenti

---

## 🧱 Korišćene tehnologije

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [SCSS](https://sass-lang.com/)
- [Vite](https://vitejs.dev/)
- (Opciono) [Storybook](https://storybook.js.org/)

---

## 📁 Struktura projekta

```
src/
├── app/               # Redux store
├── components/        # Komponente (PostExcerpt, PostDisplay)
├── features/posts/    # Redux slice za postove
├── pages/             # Stranice (Home, PostPage)
├── styles/            # Glavni SCSS fajl
├── App.jsx            # Rute aplikacije
└── main.jsx           # Ulazna tačka
```

---

## 📦 Pokretanje aplikacije lokalno

```bash
# Instalacija zavisnosti
npm install

# Pokretanje aplikacije
npm run dev
```

### 📖 Pokretanje Storybook-a (opciono)

```bash
npm run storybook
```

U Storybook-u se testiraju komponente:

- `PostExcerpt` – prikaz skraćenog posta na početnoj stranici

---

## 🌐 API koji se koristi

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) – fiktivni REST API za testiranje

---

## 📄 Napomena

- Podaci se keširaju pomoću Redux-a i ne povlače se više puta
- Aplikacija koristi `createAsyncThunk`, `useSelector`, `useDispatch` i `react-router-dom`
- Sve funkcionalnosti su u skladu sa zadatom specifikacijom

---

## 👤 Autor

**Radoslav**  
Zadatak za konkursnu poziciju u firmi **Pannonians DOO**

---

## 📎 Licenca

Projekat je napravljen u edukativne i evaluacione svrhe.
