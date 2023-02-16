
function HeaderRegister() {
  const styles = {
    header: {
        height: '70px',
        backgroundColor: '#ff5707',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        paddingLeft: '8px'
    }
  }
  return (
    <div style={styles.header}>
        <img src="https://static-sea.dragonnest.com/static-sea/2/Content/EN/images/logo.png" width={186} height={42}></img>
    </div>
  );
}

export default HeaderRegister;