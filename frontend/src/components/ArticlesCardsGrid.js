import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { Link } from 'react-router-dom';

const mockdata = [
    {
        id: 1,
        title: '10-Minute Yoga For Beginners | Start Yoga Here...',
        image:
            'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
        date: 'August 18, 2022',
    },
    {
        id: 2,
        title: '10 min STANDING FULL BODY STRETCH | Standing Yoga Without Mat',
        image:
            'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
        date: 'August 27, 2022',
    },
    {
        id: 3,
        title: '20 Minute Evening Yoga + Savasana | Deep Stretch & Relax',
        image:
            'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80',
        date: 'September 9, 2022',
    },
    {
        id: 4,
        title: 'Full Body Yoga for Strength & Flexibility | 25 Minute At Home Mobility Routine',
        image:
            'https://images.unsplash.com/photo-1593164842264-854604db2260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        date: 'September 12, 2022',
    },
];

const useStyles = createStyles((theme) => ({
    card: {
        transition: 'transform 150ms ease, box-shadow 150ms ease',

        '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: theme.shadows.md,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600,
    },
}));

export default function ArticlesCardsGrid() {
    const { classes } = useStyles();

    const cards = mockdata.map((article) => (
        <Link to={`/video/${encodeURIComponent(article.id)}`} key={article.id}>
            <Card
                p="md"
                radius="md"
                component="a"
                href="#"
                className={classes.card}
            >
                <AspectRatio ratio={1920 / 1080}>
                    <Image src={article.image} />
                </AspectRatio>
                <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                    {article.date}
                </Text>
                <Text className={classes.title} mt={5}>
                    {article.title}
                </Text>
            </Card>
        </Link>
    ));

    return (
        <Container py="xl" pt="xl">
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </Container>
    );
}