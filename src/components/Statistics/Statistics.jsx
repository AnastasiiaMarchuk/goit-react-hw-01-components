import { StatsSection, Title,  StatList, StatItem, Label, Percentage } from "./Statistics.styled";

export const Statistics = ({title, stats}) => {
    return (
            <StatsSection>
                <Title>Upload stats</Title>
                        <StatList>
                    {stats.map(({ label, percentage, id }) => (
                        <StatItem key={id}>
                            <Label>{label}</Label>
                            <Percentage>{percentage}%</Percentage>
                        </StatItem>
                    ))}
                </StatList>
            </StatsSection>
            );
        };


