import { Card, CardBody, CardHeader, CardMedia, CardTitle } from '../src/Card';
import { CardGroup } from '../src/CardGroup';
import { images } from './images';

/**
 * Media options from USWDS: `inset` pads the media inside the border, `exdent` runs it
 * over the border to the card's edge, and `headerFirst` puts the header above the media.
 */
export const CardMediaVariants = () => (
  <CardGroup columns={4}>
    <Card>
      <CardHeader>
        <CardTitle>Default</CardTitle>
      </CardHeader>
      <CardMedia alt="" src={images.forms} />
      <CardBody>
        <p>Media fills the card's width inside the border.</p>
      </CardBody>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Inset</CardTitle>
      </CardHeader>
      <CardMedia alt="" src={images.navigation} variant="inset" />
      <CardBody>
        <p>Media sits inside the card's padding.</p>
      </CardBody>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Exdent</CardTitle>
      </CardHeader>
      <CardMedia alt="" src={images.data} variant="exdent" />
      <CardBody>
        <p>Media extends over the border to the card's edge.</p>
      </CardBody>
    </Card>
    <Card headerFirst>
      <CardHeader>
        <CardTitle>Header first</CardTitle>
      </CardHeader>
      <CardMedia alt="" src={images.design} />
      <CardBody>
        <p>The header shows above the media.</p>
      </CardBody>
    </Card>
  </CardGroup>
);
