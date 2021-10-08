/* eslint-disable react/no-danger-with-children */
/* eslint-disable react/no-danger */
import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Paper as MuiPaper } from '@mui/material';
import { styled } from '@mui/material/styles';

import data from './data.json';

const cardWidth = 295;
const cardHeight = 420;
const coverHeight = 105;
const coverImage = `https://picsum.photos/${cardWidth}/${coverHeight}?image=1044`;

const dividerColor = 'rgba(0, 0, 0, 0.12)';

const effect3D = `
  transform: translateZ(60px) scale(0.94);
  perspective: inherit;
  z-index: 2;
`;

const CardContainer = styled('div')`
  width: ${cardWidth}px;
  height: ${cardHeight}px;
  perspective: 1500px;
  &:hover .card {
    z-index: 5;
    visibility: visible;
    transform: rotateY(180deg);
  }
`;

const Paper = styled(MuiPaper)`
  position: relative;
  height: 100%;
  text-align: center;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
`;

const front = {
  transformStyle: 'preserve-3d',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backfaceVisibility: 'hidden',
  borderRadius: 4,
};
const Front = styled('div')(front);

const back = {
  ...front,
  position: 'absolute',
  top: 0,
  left: 0,
  transform: 'rotateY( 180deg ) translateZ(1px)',
};
const Back = styled('div')(back);

const BackHeader = styled('div')(({ theme }) => ({
  padding: '15px 20px',
  height: '90px',
  '& p': {
    margin: '5px 0',
    color: theme.palette.text.secondary,
    fontSize: 13,
  },
  '& p span': {
    display: 'block',
    textAlign: 'right',
  },
}));

const Divider = styled('div')`
  border: none;
  margin: 0 20px;
  height: 1px;
  flex-shrink: 0;
  background: ${dividerColor};
`;

const Cover = styled('div')`
  height: ${coverHeight}px;
  & img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

const Avatar = styled('div')`
  width: 120px;
  height: 120px;
  margin: -55px auto 0 auto;
  ${effect3D}
  & img {
    width: 100%;
    border-radius: 50%;
    border: 4px solid #fff;
  }
`;

const Content = styled('div')(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(1, 1),
  transform: 'translateZ(60px) scale(0.94)',
  perspective: 'inherit',
  zIndex: 2,
  '& p:nth-of-type(1)': {
    margin: 0,
    fontSize: theme.typography.h5.fontSize,
    textTransform: 'capitalize',
  },
  '& p:nth-of-type(2)': {
    marginTop: 0,
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
  },
  '& p:nth-of-type(3)': {
    fontSize: theme.typography.body2.fontSize,
  },
}));

const Footer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 0),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Statistic = styled('div')(({ theme }) => ({
  margin: '10px 20px 20px 20px',
  display: 'flex',
  justifyContent: 'center',

  '& div': {
    width: '100%',

    '&:nth-child(2)': {
      borderLeft: `1px solid ${dividerColor}`,
      borderRight: `1px solid ${dividerColor}`,
    },

    '& > p': {
      fontSize: 18,
      margin: '5px 0 0 0',
    },
    '& > p + p': {
      margin: '0 0 5px 0',
      fontSize: 14,
      color: theme.palette.text.secondary,
    },
  },
}));

export default () => (
  <CardContainer>
    <Paper elevation={8} className="card">
      <Front>
        <Cover>
          <img src={coverImage} alt="Cover" />
        </Cover>
        <Avatar>
          <img src="img/ivan.jpg" alt="User avatar" />
        </Avatar>
        <Content>
          <p>Title</p>
          <p>Subtitle</p>
          <p>
            <em>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus autem consectetur libero. Molestiae aliquam,
              distinctio aspernatur ad ea nostrum.
            </em>
          </p>
        </Content>
        <Divider />
        <Footer>
          <AddIcon color="action" sx={{ marginRight: 1 }} />
          More info
        </Footer>
      </Front>
      <Back>
        <BackHeader>
          <p dangerouslySetInnerHTML={{ __html: data.front.content }} />
        </BackHeader>
        <Divider />
        <Content>
          <p>Lorem ipsum</p>
          <p />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            unde vitae quisquam id.
          </p>
        </Content>
        <Statistic>
          <div>
            <p>235</p>
            <p>Followers</p>
          </div>
          <div>
            <p>114</p>
            <p>Following</p>
          </div>
          <div>
            <p>35</p>
            <p>Projects</p>
          </div>
        </Statistic>
        <Divider />
        <Footer>
          <IconButton
            href={data.back.socialLinks.github}
            rel="noopener noreferrer"
            target="_blank"
            color="primary"
            sx={{ position: 'initial' }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            href={data.back.socialLinks.facebook}
            rel="noopener noreferrer"
            target="_blank"
            color="primary"
            sx={{ position: 'initial' }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            href={data.back.socialLinks.linkedin}
            rel="noopener noreferrer"
            target="_blank"
            color="primary"
            sx={{ position: 'initial' }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            href={data.back.socialLinks.twitter}
            rel="noopener noreferrer"
            target="_blank"
            color="primary"
            sx={{ position: 'initial' }}
          >
            <Twitter />
          </IconButton>
        </Footer>
      </Back>
    </Paper>
  </CardContainer>
);
