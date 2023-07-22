import {Component} from 'react'

import {
  MainContainer,
  Container,
  Heading,
  Form,
  Label,
  Input,
  Select,
  Button,
  MemeContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '8px',
    isValid: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, fontSize} = this.state
    if (
      imageUrl !== '' &&
      topText !== '' &&
      bottomText !== '' &&
      fontSize !== ''
    ) {
      console.log('valid')
      this.setState({isValid: true})
    }
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: `${event.target.value}px`})
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: `${event.target.value}`})
  }

  render() {
    const {imageUrl, bottomText, topText, fontSize, isValid} = this.state
    const memeApp = (
      <>
        <MainContainer>
          <Container>
            <Heading>Meme Generator</Heading>
            <Form onSubmit={this.onSubmitForm}>
              <Label htmlFor="image-url">Image URL</Label>
              <Input
                id="image-url"
                placeholder="Enter the Image Url"
                value={imageUrl}
                onChange={this.onChangeImageUrl}
              />
              <Label htmlFor="top-text">Top Text</Label>
              <Input
                id="top-text"
                placeholder="Enter the Top Text"
                value={topText}
                onChange={this.onChangeTopText}
              />
              <Label htmlFor="bottom-text">Bottom Text</Label>
              <Input
                id="bottom-text"
                placeholder="Enter the Bottom Text"
                value={bottomText}
                onChange={this.onChangeBottomText}
              />
              <Label htmlFor="font-size">Font Size</Label>
              <Select onChange={this.onChangeFontSize} id="font-size">
                {fontSizesOptionsList.map(eachOption => (
                  <option key={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </Select>
              <Button type="submit">Generate</Button>
            </Form>
          </Container>
          <MemeContainer
            data-testid="meme"
            bg={imageUrl}
            display={isValid ? 'flex' : 'none'}
          >
            <Text fz={fontSize} top>
              {topText}
            </Text>
            <Text fz={fontSize}>{bottomText}</Text>
          </MemeContainer>
        </MainContainer>
      </>
    )
    return memeApp
  }
}

export default MemeGenerator
