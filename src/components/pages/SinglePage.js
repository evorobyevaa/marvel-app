import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelServece';
import Spinner from '../spinner/Spinner';
import ErrorMsg from '../errorMsg/ErrorMsg';
import AppBanner from "../appBanner/AppBanner";


const SinglePage = ({Component, dataType}) => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const {loading, error, getComic, getCharacter, clearError} = useMarvelService();

  useEffect(() => {
    updateData()
  }, [id])

  const updateData = () => {
    clearError();
    switch (dataType) {
      case 'comic':
        getComic(id).then(onDataLoaded);
        break;
      case 'character':
        getCharacter(id).then(onDataLoaded);
    }
  }

  const onDataLoaded = (data) => {
    setData(data);
  }

  const errorMsg = error ? <ErrorMsg/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !(loading || error || !data) ? <Component data={data}/> : null;

  return (
    <>
      <AppBanner/>
      {errorMsg}
      {spinner}
      {content}
    </>
  )
}

export default SinglePage;