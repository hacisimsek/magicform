import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="brand-box">
        <h1>Magic Form</h1>
        <p>Buil form in react witout the tears</p>
      </div>
      <div className="magic-form">
        <Formik
          initialValues={{
            name: '',
            email: '',
            agree: false,
            favoriteColor: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('isim boş bırakılamaz..'),
            email: Yup.string().email().required('email boş bırakılamaz'),
            agree: Yup.bool().required('koşulları kabul etmelisiniz'),
            favoriteColor: Yup.string()
              .required('Lütfen bir renk yazınız..')
              .oneOf(['red', 'blue', 'green']),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 2000);
          }}
        >
          {({
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleSubmit,
            handleReset,
            handleChange,
          }) => (
            <form className="magic-form" onSubmit={handleSubmit}>
              <h3>Kaydol</h3>
              <label htmlFor="name">İsim</label>
              <input
                id="name"
                type="text"
                placeholder="Hacı..."
                className="input"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="examples@gmail.com..."
                className="input"
                value={values.email}
                onChange={handleChange}
              />

              <label htmlFor="favoriteColor" className="topMargin">
                Favori Renk
              </label>

              <select
                id="favoriteColor"
                value={values.favoriteColor}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: '150px',
                  padding: '10px 15px',
                  outline: 'none',
                }}
              >
                <option value="" label="Renk Seç" />
                <option value="red" label="Kırmızı" />
                <option value="blue" label="Mavi" />
                <option value="green" label="Yeşil" />
              </select>
              {errors.favoriteColor && touched.favoriteColor && (
                <div className="input-feedback">{errors.favoriteColor}</div>
              )}

              <div className="checkbox topMargin">
                <input
                  id="agree"
                  type="checkbox"
                  value={values.agree}
                  onChange={handleChange}
                />
                <label htmlFor="agree" className="checkbox-label">
                  Sözleşmeyi okudum kabul ediyorum.
                </label>
              </div>
              {errors.agree && (
                <div className="input-feedback">{errors.agree}</div>
              )}

              <button type="submit" disabled={!dirty || isSubmitting}>
                Kaydol
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default App;
