import React, {useEffect, useState} from 'react'

const TwoPass = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <div>
    </div>
  );
}
export default TwoPass;
