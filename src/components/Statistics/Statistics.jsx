export const Statistics = ({title, stats}) => {
    return (
                <section className="statistics">
                    <h2 className="title">Upload stats</h2>
        
                    <ul className="stat-list">
                        {stats.map(({ label, percentage, id }) => (
                            <li className="item" key={id}>
                                <span className="label">{label}</span>
                                <span className="percentage">{percentage}%</span>
                            </li>
                        ))}
                    </ul>
                </section>
            );
        };


