import React from 'react'
import Loader from './../components/Loader/index.jsx';
import Button from './../components/Button/index.jsx';
import Icon from './../components/Icon/index.jsx';
import Input from './../components/Input/index.jsx';
import Header from './../components/Header/index.jsx';
import Card from './../components/Card/index.jsx';
import Grid from './../components/Grid/index.jsx';


export default function PatternsPage() {
  return (
    <div>
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

      <div className="mt-20">
        <Card>asds</Card>
      </div>

      <div className="mt-20">
        <Card title="Hello">asds</Card>
      </div>

      <div className="mt-20">
        <Card title="Hello" footer="Footer">asds</Card>
      </div>

      <div className="mt-20">
        <Card title="Hello" footer="Footer" height="300">asds</Card>
      </div>

      <div className="mt-20">
        <Grid
          start="tablet" 
          items={{
            first: {
              size: '1of1',
              markup: <div>1</div>
            },

            second: {
              size: '1of2',
              markup: <div>2</div>
            },

            third: {
              size: '1of2',
              markup: <div>3</div>
            },

            fourth: {
              size: '1of3',
              markup: <div>4</div>
            },

            fifth: {
              size: '1of3',
              markup: <div>5</div>
            },

            sixth: {
              size: '1of3',
              markup: <div>6</div>
            }
          }}
        />
      </div>
    </div>
  )
}
