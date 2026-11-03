import { Button } from '../../Button';
import { Card, CardBody, CardFooter, CardHeader, CardMedia, CardTitle } from '../src/Card';
import { CardGroup } from '../src/CardGroup';
import { images } from './images';

/**
 * A group of cards. `CardGroup` renders a list and wraps each card in its own item.
 * The header comes before the media in the markup; CSS shows the media first.
 * The images are decorative (`alt=""`) because each title already names the topic.
 */
export const CardGroupDefault = () => (
  <CardGroup>
    <Card>
      <CardHeader>
        <CardTitle>Form components</CardTitle>
      </CardHeader>
      <CardMedia alt="" src={images.forms} />
      <CardBody>
        <p>
          Inputs, selects, checkboxes, radios and more, with validation and accessibility built in.
        </p>
      </CardBody>
      <CardFooter>
        <Button variant="primary">Explore forms</Button>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Navigation</CardTitle>
      </CardHeader>
      <CardMedia alt="" src={images.navigation} />
      <CardBody>
        <p>Breadcrumbs, tabs and step indicators for clear, predictable navigation.</p>
      </CardBody>
      <CardFooter>
        <Button variant="primary">View examples</Button>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Data display</CardTitle>
      </CardHeader>
      <CardMedia alt="" src={images.data} />
      <CardBody>
        <p>Tables, badges and cards for presenting information clearly.</p>
      </CardBody>
      <CardFooter>
        <Button variant="primary">See components</Button>
      </CardFooter>
    </Card>
  </CardGroup>
);
