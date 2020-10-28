import React, { useState } from 'react';
import { connect } from 'react-redux'
import '../assets/styles/components/Search.scss';
import classNames from 'classnames'
import { getFilterVideos } from '../actions';
const Search = ({ getFilterVideos, isHome }) => {
  const inputStyle = classNames('input', {
    isHome
  });
  const handleSearch = ({ target }) => {
    getFilterVideos(target.value);
  }
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className={inputStyle} placeholder="Buscar..." onChange={handleSearch} />
    </section>
  );
}

const mapDispatchToProps = {
  getFilterVideos
}

export default connect(null, mapDispatchToProps)(Search);