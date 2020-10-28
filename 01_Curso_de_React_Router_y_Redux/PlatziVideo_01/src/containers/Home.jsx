import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';
import Header from '../components/Header';

const Home = ({mylist,trends,originals,filterSearch}) => {
  return (
    <>
    <Header/>
      <Search isHome/>
      {filterSearch.length > 0 &&
        <Categories title="Coincidencias">
          <Carousel>
            {filterSearch.map(item =>
              <CarouselItem 
              key={item.id} 
              {...item} 
              isList
              />
            )}
          </Carousel>
        </Categories>
      }

      {mylist.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {mylist.map(item =>
              <CarouselItem 
              key={item.id} 
              {...item} 
              isList
              />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
}

//Funcion para pasar datos de redux a los props
const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    filterSearch: state.filterSearch
  }
}
export default connect(mapStateToProps, null)(Home);