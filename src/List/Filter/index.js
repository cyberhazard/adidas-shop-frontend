import React from 'react';
import { Wrapper, Image, Button, Label } from './styled';

const Filter = () => (
  <Wrapper>
    <Image src={require('./filter.png')} />
    <div>
      <Button selected>Man</Button>
      <Button>Woman</Button>
    </div>
    <div>
      <Label>Size</Label>
      <Button mini>36</Button>
      <Button mini>37</Button>
      <Button mini>38</Button>
      <Button mini>39</Button>
      <Button mini>40</Button>
      <Button mini selected>41</Button>
      <Button mini>42</Button>
    </div>
  </Wrapper>
);

export default Filter;
