function(doc, req)
{
  if(doc.datastream_id == req.query.datastream_id) {
    return true;
  }

  return false;
} 
