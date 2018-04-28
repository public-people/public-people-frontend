import React from 'react'
import Loader from './../components/Loader/index.jsx';
import Button from './../components/Button/index.jsx';
import Icon from './../components/Icon/index.jsx';
import Input from './../components/Input/index.jsx';
import Header from './../components/Header/index.jsx';

export default function PatternsPage() {
  return (
    <div>
      <div className="mt-20">
        <Loader />
      </div>
      <div className="mt-20">
        <Loader percentage={65} />
      </div>
      <div className="mt-20">
        <Button>Standard Button</Button>
      </div>
      <div className="mt-20">
        <Button primary>Primary Button</Button>
      </div>
      <div className="mt-20">
        <Icon type="search"/>
      </div>
      <div className="mt-20">
        <Icon type="home"/>
      </div>
      <div className="mt-20">
        <Icon size="large" type="home"/>
      </div>
      <div className="mt-20">
        <Button>
         <Icon type="search"/>
        </Button>
      </div>
      <div className="mt-20">
        <Button primary>
         <Icon type="home"/>
        </Button>
      </div>
      <div className="mt-20">
        <Input placeholder="Placeholder" />
      </div>
      <div className="mt-20">
        <Header />
      </div>
    </div>
  )
}
