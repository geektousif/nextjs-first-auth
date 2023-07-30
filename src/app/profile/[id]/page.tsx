export default function UserProfile({ params }: any) {
  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p>Profile of {params.id}</p>
    </div>
  );
}
