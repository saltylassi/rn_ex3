import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import MovieSlide from "./MovieSlide";
import ViewPager from '@react-native-community/viewpager';

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
  height: ${SWIPER_HEIGHT};
`;

const Text = styled.Text``;

const MovieSlider = ({ movies }) =>
  movies ? (
    <ViewPager
      showsPagination={false}
      autoplay={true}
      style={{ height: SWIPER_HEIGHT }}
      autoplayTimeout={3}
      scrollEnabled={true}
    >
      {movies
        .filter(movie => movie.backdrop_path !== null)
        .map(movie => (
          <View key={movie.id}>
            <MovieSlide
              overview={movie.overview}
              voteAvg={movie.vote_average}
              title={movie.title}
              id={movie.id}
              backgroundPhoto={movie.backdrop_path}
              posterPhoto={movie.poster_path}
            />
          </View>
        ))}
    </ViewPager>
  ) : null;

MovieSlider.propTypes = {
  movies: PropTypes.array
};

export default MovieSlider;