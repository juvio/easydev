export function ExperienceBar() {
    return (
        <header className="xpBar">
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className="currentXP" style={{left: '50%'}}> 300 xp</span>
            </div>
            <span>600 xp</span>
        </header>
    );
}